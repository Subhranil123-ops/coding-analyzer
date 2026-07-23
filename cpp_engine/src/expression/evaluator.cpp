#include "stack.h"
#include <iostream>
#include <cctype>
#include <stdexcept>
#include "utils/helpers.h"
using namespace std;

int postfixEvaluation(const string &exp)
{
    Stack<int> s;
    int len = exp.length();
    for (int i = 0; i < len; i++)
    {
        char ch = exp[i];
        if (ch == ' ')
            continue;

        // multidigit number parsing

        if (isdigit(ch))
        {
            int num = 0;
            while (i < len && isdigit(exp[i]))
            {
                num = num * 10 + (exp[i] - '0');
                i++;
            }
            s.push(num);
            i--; // because loop has iterated once extra times
        }

        else if (isOperator(ch))
        {
            int result;
            int op2 = s.peek();
            s.pop();
            int op1 = s.peek();
            s.pop();
            switch (ch)
            {
            case '+':
                result = op1 + op2;
                break;
            case '-':
                result = op1 - op2;
                break;
            case '*':
                result = op1 * op2;
                break;
            case '/':
                if (op2 == 0)
                    throw runtime_error("Division By Zero");
                result = op1 / op2;
                break;
            }
            s.push(result);
        }
    }

    return s.peek(); // output
}
