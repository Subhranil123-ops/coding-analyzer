#include <iostream>
#include <string>
#include "validator.h"
#include "helpers.h"
using namespace std;

bool validateBalancedParenthesis(const string &exp)
{
}

bool validateStarting(const string &exp)
{
}

bool validateTwoOperatorsAdjacent(const string &exp)
{
}

void validateCharacters(const string &exp)
{
    for (auto &ch : exp)
    {
        if (isdigit(ch))
            continue;
        else if (ch == ' ')
            continue;
        else if (isOperator(ch))
            continue;
        else if (ch == '(' || ch == ')')
            continue;
        else
        {
            throw invalid_argument("Invalid Character '" + string(1, ch) + "'");
        }
    }
}

bool validateExpression(const string &exp)
{
    // balanced parenthesis
    void validateBalancedParenthesis(exp)
    {
    }

    // operator at front
    void validateStarting(exp)
    {
    }

    // two operator together
    void validateTwoOperatorsAdjacent(exp)
    {
    }

    // special characters
    void validateCharacters(exp)
    {
    }

    return true;
}