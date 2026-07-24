#include <iostream>
#include <iomanip>
#include <vector>
#include <string>

#include "expression/validator.h"
#include "expression/detector.h"
#include "expression/processor.h"
#include "expression/converter.h"
#include "expression/evaluator.h"

using namespace std;

struct TestCase
{
    string input;
    bool shouldPass;
};

string typeToString(Type t)
{
    switch (t)
    {
    case INFIX:
        return "INFIX";
    case PREFIX:
        return "PREFIX";
    case POSTFIX:
        return "POSTFIX";
    }

    return "UNKNOWN";
}

int main()
{
    vector<TestCase> tests =
        {
            // ===========================
            // VALID INFIX EXPRESSIONS
            // ===========================

            {"1+2", true},
            {"10+20", true},
            {"2+3*4", true},
            {"(2+3)*4", true},
            {"((2+3)*(4+5))", true},
            {"100/(5+5)", true},
            {"12+34*2", true},
            {"(12+34)*2", true},
            {"999*999", true},
            {"5*(6+(7*8))", true},
            {"((1))", true},
            {"1+(2*(3+(4*5)))", true},
            {"12345+67890", true},
            {"1000/(10+10)", true},
            {"50-20", true},
            {"100-20*2", true},
            {"(100-20)*2", true},
            {"8*7+6", true},
            {"8*(7+6)", true},
            {"100/25", true},

            // ===========================
            // VALID PREFIX EXPRESSIONS
            // ===========================

            {"+ 2 3", true},
            {"* + 2 3 4", true},
            {"+ 10 * 20 30", true},
            {"- * 5 6 10", true},
            {"/ 100 + 5 5", true},
            {"+ * 2 3 * 4 5", true},
            {"* + 10 20 + 30 40", true},
            {"+ + 1 2 3", true},
            {"- 50 20", true},
            {"* 100 10", true},

            // ===========================
            // VALID POSTFIX EXPRESSIONS
            // ===========================

            {"2 3 +", true},
            {"2 3 4 * +", true},
            {"10 20 30 * +", true},
            {"5 6 * 10 -", true},
            {"100 5 5 + /", true},
            {"2 3 * 4 5 * +", true},
            {"50 20 -", true},
            {"100 10 *", true},
            {"10 20 + 30 +", true},
            {"5 5 + 2 *", true},

            // ===========================
            // INVALID EXPRESSIONS
            // ===========================

            {"", false},
            {" ", false},
            {"      ", false},
            {"\t", false},
            {"\n", false},

            {"2+a", false},
            {"2@3", false},
            {"5#6", false},
            {"hello", false},
            {"abc", false},
            {"2$3", false},

            {"(", false},
            {")", false},
            {"((2+3)", false},
            {"(2+3))", false},
            {"(()", false},
            {"())", false},

            {"2++3", false},
            {"2--3", false},
            {"2**3", false},
            {"2//3", false},
            {"2/*3", false},

            {"2+", false},
            {"+2", false},
            {"*", false},
            {"/", false},

            {"()", false},
            {"( )", false},
            {"2+()", false},

            {"2(3+4)", false},
            {"(2+3)4", false},
            {"23 45", false},
            {"12 34", false},

            {"5/0", false},
            {"10/(5-5)", false},

            {"+", false},
            {"1 +", false},
            {"1 2", false},
            {"1 2 + +", false},
            {"+ + 1 2", false},
            {"+ 1", false},
            {"1 + +", false}};

    int passed = 0;
    int failed = 0;

    cout << "\n";
    cout << "==============================================================\n";
    cout << "            EXPRESSION ENGINE TEST REPORT\n";
    cout << "==============================================================\n\n";

    cout << left
         << setw(5) << "No"
         << setw(30) << "Input"
         << setw(12) << "Expected"
         << setw(12) << "Actual"
         << setw(10) << "Status"
         << endl;

    cout << string(75, '-') << endl;

    for (size_t i = 0; i < tests.size(); i++)
    {
        const TestCase &tc = tests[i];
        bool actualPass = true;

        try
        {
            validateExpression(tc.input);

            Type t = detectType(tc.input);

            string postfix = getPostfix(tc.input, t);

            string prefix = postfixToPrefix(postfix);

            string infix = postfixToInfix(postfix);

            int result = postfixEvaluation(postfix);

            actualPass = true;

            bool ok = (tc.shouldPass == actualPass);

            if (ok)
                passed++;
            else
                failed++;

            cout << left
                 << setw(5) << i + 1
                 << setw(30) << tc.input
                 << setw(12) << (tc.shouldPass ? "PASS" : "ERROR")
                 << setw(12) << "PASS"
                 << setw(10) << (ok ? "PASS" : "FAIL")
                 << endl;

            cout << "\n";
            cout << "   Detected Type : " << typeToString(t) << endl;
            cout << "   Postfix       : " << postfix << endl;
            cout << "   Prefix        : " << prefix << endl;
            cout << "   Infix         : " << infix << endl;
            cout << "   Result        : " << result << endl;
            cout << string(75, '-') << endl;
        }
        catch (exception &e)
        {
            actualPass = false;

            bool ok = (tc.shouldPass == actualPass);

            if (ok)
                passed++;
            else
                failed++;

            cout << left
                 << setw(5) << i + 1
                 << setw(30) << tc.input
                 << setw(12) << (tc.shouldPass ? "PASS" : "ERROR")
                 << setw(12) << "ERROR"
                 << setw(10) << (ok ? "PASS" : "FAIL")
                 << endl;

            cout << "\n";
            cout << "   Exception : " << e.what() << endl;
            cout << string(75, '-') << endl;
        }
    }

    cout << "\n\n";
    cout << "==============================================================\n";
    cout << "                    TEST SUMMARY\n";
    cout << "==============================================================\n";

    cout << left << setw(20) << "Total Tests" << tests.size() << endl;
    cout << left << setw(20) << "Passed" << passed << endl;
    cout << left << setw(20) << "Failed" << failed << endl;

    double percentage = 100.0 * passed / tests.size();

    cout << left << setw(20) << "Success Rate"
         << fixed << setprecision(2)
         << percentage << "%" << endl;

    cout << "==============================================================\n";

    if (failed == 0)
    {
        cout << "\n🎉 All tests passed successfully.\n";
    }
    else
    {
        cout << "\n❌ Some tests failed. Please inspect the report above.\n";
    }

    return 0;
}