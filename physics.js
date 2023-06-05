let obj = {
    f: 10,
    m: 5,
    Δv: 100,
    Δt: 50,
    t: 1,
    d: 1
}


function getAcceleration(obj) {
    let accel = {
        formul1: obj.f / obj.m,
        formul2: obj.Δv / obj.Δt,
        formul3: 2 * obj.d / (obj.t * obj.t),
    };
    let check = accel.formul1 === accel.formul2 &&
        accel.formul2 === accel.formul3;
    return check ? accel.formul1 : "impossible";
}

console.log(getAcceleration(obj));