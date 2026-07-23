#include <iostream>
#include <string>
#include "expression/detector.h"
#include "expression/notationValidator.h"
#include "expression/converter.h"
using namespace std;
string getPostfix(const string &input, Type t)
{
    switch (t)
    {
    case INFIX:
        validateInfix(input);
        return infixToPostfix(input);
    case PREFIX:
        validatePrefix(input);
        return prefixToPostfix(input);
    case POSTFIX:
        validatePostfix(input);
        return input;
    }
    throw invalid_argument("Unknown Expression Type");
}