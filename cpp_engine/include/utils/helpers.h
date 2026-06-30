#ifndef HELPERS_H
#define HELPERS_H
#include <string>
using namespace std;

bool isOperator(char &ch)
{
    return ch == "+" || ch == "-" || ch == "*" || ch == "/";
}

#endif