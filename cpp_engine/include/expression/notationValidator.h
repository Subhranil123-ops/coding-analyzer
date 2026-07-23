#ifndef NOTATION_VALIDATOR_H
#define NOTATION_VALIDATOR_H
#include <string>
using namespace std;

void validatePrefix(const string &exp);
void validateInfix(const string &exp);
void validatePostfix(const string &exp);

#endif