const packages = [
    { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs' },
    { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk' },
    { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147' },
    { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145' },
    { heavy: true, priority: true, fragile: true, to: 'Brittany' },
    { heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz' },
    { heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367' }]

function filterHeavy() {
    for (let i = 0; i < packages.length; i++) {
        const packages = packages[i];
        if (packages.heavy) {
            heavy.push(packages)
        }
    }
}
draw()

function priority() {

}

function fragile() {

}

function to() {

}

function trackingNumber() {

}