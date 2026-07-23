#include <iostream>
#include <string>
#include "expression/validator.h"
#include "utils/helpers.h"
#include "stack.h"

using namespace std;
void validate_empty_exp(const string &exp)
{
    bool isEmpty = exp.find_first_not_of(" \t\n") == string::npos;

    if (exp.empty() || isEmpty)
    {
        throw invalid_argument("Expression is Empty");
    }
}

void validateCharacters(const string &exp)
{
    for (char ch : exp)
    {
        if (isdigit(ch))
            continue;
        if (ch == ' ')
            continue;
        if (isOperator(ch))
            continue;
        if (ch == '(' || ch == ')')
            continue;

        throw invalid_argument("Invalid Character '" + string(1, ch) + "'");
    }
}

void validateBalancedParenthesis(const string &exp)
{
    Stack<char> s;
    for (char ch : exp)
    {
        if (ch == '(')
        {
            s.push(ch);
        }
        else if (ch == ')')
        {
            if (!s.isEmpty())
                s.pop();
            else
                throw invalid_argument("Unbalanced Parenthesis");
        }
    }
    if (!s.isEmpty())
    {
        throw invalid_argument("Unbalanced Parenthesis");
    }
}



bool validateExpression(const string &exp)
{
    // validate empty
    validate_empty_exp(exp);

    // special characters
    validateCharacters(exp);

    // balanced parenthesis
    validateBalancedParenthesis(exp);

    return true;
}