#define CROW_USE_ASIO
#include "crow.h"
#include <iostream>
#include "Myvector.h"
#include "validator.h"
#include "notationValidator.h"
#include "processor.h"
#include "converter.h"
#include "evaluator.h"
#include "analyzer.h"
#include "mode.h"
#include <stdexcept>
#include "utils/error.h"

using namespace std;

string timeComplexity(int depth)
{
    if (depth == 0)
        return "O(1)";
    else if (depth == 1)
        return "O(n)";
    else if (depth == 2)
        return "O(n^2)";
    else if (depth == 3)
        return "O(n^3)";

    return "O(n^k)";
}
int main()
{
    crow::SimpleApp app;
    CROW_ROUTE(app, "/analyze").methods("POST"_method)([](const crow::request &req)
                                                       {
        auto body = crow::json::load(req.body);
        crow::json::wvalue err;
                                    err["success"] = false;

                                    if (!body)
                                    {
                                        return makeError(400,"Invalid or empty JSON");
                                    }
        if (!body.has("code"))
        {
            return makeError(400,"Missing Code Field");
        }

        if (body["code"].t() != crow::json::type::String)
        {
            return makeError(400,"Code Field must be a string");
        }

        auto input = body["code"].s();

        if (!isCodeInput(input)){
            return makeError(400,"Provided input is not valid code");
        }

        Myvector<int> result = analyzeCode(input);
        crow::json::wvalue res;

        if (result.size() < 5)
        {
            return makeError(500,"Analysis Error");
        }

        res["for"] = result[0];
        res["if"] = result[1];
        res["else"] = result[2];
        res["while"] = result[3];
        res["maxDepth"] = result[4];

        string complexity = timeComplexity(result[4]);

        res["estimatedComplexity"] = complexity;

        return crow::response(200, res); });

    // Expression Evaluator

    CROW_ROUTE(app, "/expression")
        .methods("POST"_method)([](const crow::request &req)
                                {
                                    auto body = crow::json::load(req.body);

                                    if (!body)
                                    {
                                        return makeError(400, "Invalid or empty JSON");
                                    }

                                    if (!body.has("expression"))
                                    {
                                        return makeError(400, "Missing Expression Field");
                                    }

                                    if (body["expression"].t() != crow::json::type::String)
                                    {
                                        return makeError(400, "Expression Field must be a string");
                                    }

                                    string input = body["expression"].s();

                                    if (isCodeInput(input))
                                    {
                                        return makeError(400, "Provided input is not valid expression");
                                    }
                                    try
                                    {
                                        validateExpression(input);

                                        Type t = detectType(input);
                                        string postfix = getPostfix(input,t);

                                        crow::json::wvalue res;

                                        res["postfix"] = postfix;

                                        res["infix"] = postfixToInfix(postfix);

                                        res["prefix"] = postfixToPrefix(postfix);

                                        res["result"] = postfixEvaluation(postfix);

                                        return crow::response(200, res);
                                    }
                                    catch (exception &e)
                                    {
                                        return makeError(400, e.what());
                                    } });

    app.port(5000).multithreaded().run();
    return 0;
};