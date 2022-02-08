const packages = [
    { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs', Missing: false },
    { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk', Missing: false },
    { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147', Missing: false },
    { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145', Missing: false },
    { heavy: true, priority: true, fragile: true, to: 'Brittany', trackingNumber: 'hya16jk', Missing: false },
    { heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz', Missing: false },
    { heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367', Missing: false }]


function draw() {

}

function filterHeavy() {
    let filteredArray = packages.filter(package => package.heavy == false)
    console.log(filteredArray)
    draw()
}


function filterPriority() {
    let filteredArray = packages.filter(package => package.priority == false)
    console.log(filteredArray)
    draw()
}


function filterFragile() {
    let filteredArray = packages.filter(package => package.fragile == false)
    console.log(filteredArray)
    draw()
}


// Note to self. Look up spread operators

