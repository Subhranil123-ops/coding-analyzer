cmake_minimum_required(VERSION 3.28)
project(CodingAnalyzer)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(server
    src/cpp/analyzer.cpp
    src/cpp/tokenizer.cpp
    src/expression/converter.cpp
    src/expression/detector.cpp
    src/expression/evaluator.cpp
    src/expression/notationValidator.cpp
    src/expression/processor.cpp
    src/expression/validator.cpp
    src/mode.cpp
    main.cpp
)

add_executable(expression_test
    src/cpp/analyzer.cpp
    src/cpp/tokenizer.cpp
    src/expression/converter.cpp
    src/expression/detector.cpp
    src/expression/evaluator.cpp
    src/expression/notationValidator.cpp
    src/expression/processor.cpp
    src/expression/validator.cpp
    src/mode.cpp
    tests/expression_test.cpp
)

target_include_directories(server PRIVATE include)
target_include_directories(expression_test PRIVATE include)

target_compile_definitions(server PRIVATE CROW_USE_ASIO ASIO_STANDALONE)
target_compile_definitions(expression_test PRIVATE CROW_USE_ASIO ASIO_STANDALONE)

find_package(Threads REQUIRED)

target_link_libraries(server PRIVATE Threads::Threads ws2_32 mswsock)
target_link_libraries(expression_test PRIVATE Threads::Threads ws2_32 mswsock)

