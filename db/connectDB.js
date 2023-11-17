import dotenv from 'dotenv'
import mongoose from 'mongoose'
import ora from 'ora'
import chalk from 'chalk'

dotenv.config()

export async function connectDB(){
    try {
        const spinner = ora('::Conectandose::...').start()
        await mongoose.connect(process.env.MONGO_URI)
        spinner.stop()
        console.log(chalk.greenBright('Se conectó de manera exitosa a la base de datos.'))   
    } catch (error) {
        console.log(chalk.redBright('Error: '), error);
        process.exit(1) 
    }
}

export async function disconnectDB(){
    try {
        await mongoose.disconnect()
        console.log(chalk.greenBright('Se desconectó de manera exitosa de la base de datos.'))
    } catch(err) {
        console.log(chalk.redBright('Error: '), error);
        process.exit(1) 
    }
}

connectDB()
disconnectDB()
