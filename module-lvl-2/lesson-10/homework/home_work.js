let whatUserLike

const userLike  = {
    weHave : [],
}

console.log(userLike);

for (let i = 1; i <= 3; i++) {

     whatUserLike = prompt('ok').toLowerCase();

     userLike.weHave[i - 1] = whatUserLike;
}

userLike.weHave.forEach(function(item, i) {
    console.log(`user like number - ${i + 1} this is ${item}`);
})




