import { Request, Response } from "express"

export interface RequestResponseInterface {
    req: Request
    res: Response
}