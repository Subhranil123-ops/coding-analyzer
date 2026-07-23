#include "expression/detector.h"
#include "utils/helpers.h"
#include "Myvector.h"
#include <cctype>

using namespace std;

Myvector<string> tokenize(string exp)
{
    Myvector<string> tokens;
    string temp = "";
    int n = exp.size();
    for (int i = 0; i < exp.size(); ++i)
    {
        if (exp[i] == ' ')
            continue;
        char ch = exp[i];
        if (isdigit(ch))
        {
            string temp = "";
            while (i < n && isdigit(exp[i]))
            {
                temp += exp[i];
                i++;
            }
            
            tokens.push_back(temp);
            temp = "";
            i--;
        }
        else
        {
            tokens.push_back(string(1,ch));
        }
    }

    return tokens;
}

Type detectType(const string exp)
{

    Myvector<string> tokens = tokenize(exp);


    if (isOperator(tokens[0][0]))
    {
        return PREFIX;
    }

    if (isOperator(tokens.back()[0]))
    {
        return POSTFIX;
    }

    return INFIX;
}