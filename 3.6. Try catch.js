const fnWithError = () => {
    throw new Error('Oh no, its broken')
}

try {
    fnWithError()
} catch (error) {
    console.log(error.message)
} finally {
    console.log('Or not!')
}

console.log('Anyways...')

