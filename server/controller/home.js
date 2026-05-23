const axios = require('axios');

module.exports.postExpressionForm = async (req, res) => {
    const { expression } = req.body;
    try {
        const result = await axios.post('http://localhost:5000/expression', { expression });
        console.log(result.data);
        // res.render("./pages/expression.ejs", { data: result.data, error: null, expression: expression });
    } catch (err) {
        console.log(err.response.data?.message || "Something went wrong");
        // res.render("./pages/expression.ejs", { data: null, error: err.response.data?.message || "Something went wrong", expression: expression });
    }

}

module.exports.postAnalyzeForm = async (req, res) => {
    const { code } = req.body;
    try {
        const result = await axios.post('http://localhost:5000/analyze', { code });
        console.log(result.data);
        // res.render("./pages/analyze.ejs", { data: result.data, error: null, code: code });
    } catch (err) {
        console.log(err.response.data?.message || "Something went wrong");
        // res.render("./pages/analyze.ejs", { data: null, error: err.response.data?.message || "Something went wrong", code: code });
    }
}





