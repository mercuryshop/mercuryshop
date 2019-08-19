'use strict'

const db = require('../server/db/')
const {User, Product} = require('../server/db/models')

async function seed() {
    await db.sync({force: true})
    console.log('db synced!')

    const products = await Promise.all([
        Product.create({
            name: 'Chair',
            modelNumber: 104925809,
            description: 'DX Racer Man',
            price: 20000,
            inventory: 20
        }),
        Product.create({
            name: 'Sofa',
            modelNumber: 401925800,
            description: 'Sofa',
            price: 50000,
            inventory: 30
        }),
        Product.create({
            name: 'Table',
            modelNumber: 810592901,
            description: 'Not for pong',
            price: 25000,
            inventory: 50
        }),
        Product.create({
            name: 'Bed',
            modelNumber: 901028528,
            description: 'Sleep here',
            price: 80000,
            inventory: 50
        })

    ])

    const users = await Promise.all([
        User.create({
            name: 'Cody',
            email: 'cody@email.com',
            password: '12345',
            isAdmin: true
        }),
        User.create({
            name: 'Kevin',
            email: 'kevin@email.com',
            password: '12345',
            isAdmin: false
        }),
        User.create({
            name: 'Calvin',
            email: 'calvin@email.com',
            password: '12345',
            isAdmin: false
        })
    ])

    console.log('seeding successful')
}

async function runSeed() {
    console.log('seeding...')
    try {
        await seed()
    } catch (err) {
        console.error(err)
        process.exitCode = 1
    } finally {
        console.log('closing db connection')
        await db.close()
        console.log('db connection closed')
    }
}

if (module === require.main) {
    runSeed()
}

module.exports = seed
