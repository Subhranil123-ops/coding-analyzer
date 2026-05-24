const axios = require('axios');

module.exports.postExpressionForm = async (req, res) => {
    const { expression } = req.body;
    try {
        const result = await axios.post('http://localhost:5000/expression', { expression });
        console.log(result.data);
        res.json(result.data);
    } catch (err) {
        console.log(err.response.data?.message || "Something went wrong");
        res.status(code).json({ message: err.response.data?.message || "Something went wrong" });
    }

}

module.exports.postAnalyzeForm = async (req, res) => {
    const { code } = req.body;
    console.log(code);
    try {
        const result = await axios.post('http://localhost:5000/analyze', { code });
        console.log(result.data);
        res.json(result.data);
    } catch (err) {
        console.log(err.response.data?.message || "Something went wrong");
        res.status(code).json({ message: err.response.data?.message || "Something went wrong" });
    }
}





