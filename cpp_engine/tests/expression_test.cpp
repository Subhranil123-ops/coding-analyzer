#include <iostream>
#include "expression/validator.h"
#include "expression/detector.h"
#include "expression/processor.h"
#include "expression/converter.h"
#include "expression/evaluator.h"
using namespace std;

int main()
{

    string input;
    cout << "Enter Expression : \n";
    getline(cin, input);
    try
    {
        validateExpression(input);

        Type t = detectType(input);
        cout << t << "\n";
        string postfix = getPostfix(input, t);
        string infix = postfixToInfix(postfix);
        string prefix = postfixToPrefix(postfix);
        cout << "Postfix : " << postfix << "\n";
        cout << "Infix : " << infix << "\n";
        cout << "Prefix : " << prefix << "\n";
        cout << "Postfix Evaluation : " << postfixEvaluation(postfix) << "\n";
    }

    catch (exception &e)
    {
        cout << "Error : " << e.what() << "\n";
    }
    return 0;
}