#include <iostream>
#include <stdexcept>
#include "helpers.h"
using namespace std;

void validatePrefix(const string &exp)
{
    int n = exp.size();
    int operands = 0;
    for (int i = n - 1; i >= 0; --i)
    {
        if (exp[i] == ' ')
            continue;
        char ch = exp[i];

        if (isdigit(ch))
        {
            while (i - 1 >= 0 && isdigit(exp[i - 1]))
            {
                i--;
            }
            operands++;
        }
        else if (isOperator(ch))
        {
            if (operands < 2)
            {
                throw invalid_argument("Operator does not have enough operands");
            }
            operands--;
        }
    }
    if (operands != 1)
    {
        throw invalid_argument("Invalid prefix expression");
    }
}

char previousNonSpace(const string &exp, int i)
{
    char prev = '\0';
    int j = i - 1;
    while (j >= 0)
    {
        if (exp[j] != ' ')
        {
            prev = exp[j];
            break;
        }
        j--;
    }
    return prev;
}

char nextNonSpace(const string &exp, int i)
{
    char next = '\0';
    int j = i + 1;
    while (j < exp.size())
    {
        if (exp[j] != ' ')
        {
            next = exp[j];
            break;
        }
        j++;
    }
    return next;
}

void validateInfix(const string &exp)
{
    // traversal through the expression
    int n = exp.size();
    for (int i = 0; i < n; ++i)
    {
        if (exp[i] == ' ')
            continue;
        char ch = exp[i];

        // prev of curr character
        char prev = previousNonSpace(exp, i);

        // for multidigit numbers
        if (isdigit(ch))
        {
            while (i + 1 < n && isdigit(exp[i + 1]))
                i++;
        }

        // next of curr character
        char next = nextNonSpace(exp, i);

        // Starting
        if (prev == '\0' && isOperator(ch))
        {
            throw invalid_argument("Infix expression cannot start with an operator");
        }

        // Ending
        if (next == '\0' && isOperator(ch))
        {
            throw invalid_argument("Infix expression cannot end with an operator");
        }

        if (isOperator(ch))
        {
            if (isOperator(prev) || isOperator(next))
            {
                throw invalid_argument("Two operators cannot be adjacent");
            }

            if (prev == '(' || next == ')')
            {
                throw invalid_argument("Operator is missing an operand");
            }
        }
        else if (ch == '(')
        {
            if (isdigit(prev) || prev == ')')
            {
                throw invalid_argument("Missing operator before '('");
            }

            if (isOperator(next) || next == ')')
            {
                throw invalid_argument("Invalid expression after '('");
            }
        }
        else if (ch == ')')
        {
            if (isOperator(prev) || prev == '(')
            {
                throw invalid_argument("Invalid expression before ')'");
            }

            if (isdigit(next) || next == '(')
            {
                throw invalid_argument("Missing operator after ')'");
            }
        }
        else if (isdigit(ch))
        {
            if (prev == ')')
            {
                throw invalid_argument("Missing operator before number");
            }

            if (next == '(')
            {
                throw invalid_argument("Missing operator before '('");
            }

            if (isdigit(next))
                throw invalid_argument("Missing operator between operands");
        }
    }
}

void validatePostfix(const string &exp)
{
    int n = exp.size();
    int operands = 0;
    for (int i = 0; i < n; ++i)
    {
        if (exp[i] == ' ')
            continue;
        char ch = exp[i];

        if (isdigit(ch))
        {
            while (i + 1 < n && isdigit(exp[i + 1]))
            {
                i++;
            }
            operands++;
        }
        else if (isOperator(ch))
        {
            if (operands < 2)
            {
                throw invalid_argument("Operator does not have enough operands");
            }
            operands--;
        }
    }
    if (operands != 1)
    {
        throw invalid_argument("Invalid postfix expression");
    }
}
