#ifndef ERROR_H
#define ERROR_H
#include "crow.h"
#include <string>

crow::response makeError(int statusCode, const std::string &message)
{
    crow::json::wvalue err;
    err["success"] = false;
    err["message"] = message;
    return crow::response(statusCode, err);
}

#endif