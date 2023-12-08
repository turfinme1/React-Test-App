import * as request from './request'

const baseUrl = "http://localhost:3030/data/articles"

export const getAll = async ()=>{
    const result = await request.get(baseUrl)
    return result
}