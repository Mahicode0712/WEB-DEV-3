const isLoggedIn = (req, res, next) => {
    let logginStatus = true

    if (!logginStatus) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
};

module.exports = { isLoggedIn };