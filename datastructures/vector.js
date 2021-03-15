class Vector {};

Vector.add = (v0, v1) => {
    return v0.map((value, index) => {
        return value + (v1[index] || 0);
    });
};

Vector.sub = (v0, v1) => {
    return v0.map((value, index) => {
        return value - (v1[index] || 0);
    });
};

Vector.mul = (v0, s0) => {
    return v0.map((value) => {
        return value * s0;
    });
};

Vector.div = (v0, s0) => {
    return v0.map((value) => {
        return value / s0;
    });
};

Vector.dot = (v0, v1) => {
    return v0.reduce((total, value, index) => {
        return total + value * (v1[index] || 0);
    });
};

module.exports = Vector;