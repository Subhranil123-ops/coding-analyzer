#ifndef NOTATION_VALIDATOR_H
#define NOTATION_VALIDATOR_H
#include <string>
using namespace std;

inline bool isOperator(char &ch)
{
    return (ch == '+') || (ch == '-') || (ch == '*') || (ch == '/');
}

#endif