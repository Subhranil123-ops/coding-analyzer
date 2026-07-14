#include <iostream>
#include "helpers.h"
using namespace std;

void validatePrefix()
{
}

void validateStarting(const string &exp)
{
    if (isOperator(exp[0]))
        throw invalid_argument("Infix expression cannot start with an operator");
}

void validateEnding(const string &exp)
{
    if (isOperator(exp[exp.size() - 1]))
        throw invalid_argument("Infix expression cannot end with an operator");
}

void validateTwoOperatorsAdjacent(const string &exp)
{
    int n = exp.size();
    int check0 = 0;
    for (int i = 0; i < n; ++i)
    {
        char ch = exp[i];
        if (ch == ' ')
            continue;
        if (isOperator(ch))
        {
            if (check0 == 1)
                throw invalid_argument("Two operators can't be adjacent");

            check0 = 1;
        }
        else
        {
            check0 = 0;
        }
    }
}

void validateInfix(const string &exp)
{
    // validate starting
    validateStarting(exp);

    // validate ending
    validateEnding(exp);

    // validate adjacent operators
    validateTwoOperatorsAdjacent(exp);
}

void validatePostfix()
{
    
}
