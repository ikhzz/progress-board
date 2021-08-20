import progress from '../models/Progress'
import express from 'express'

class ProgressController {
  read = async (req: express.Request, res: express.Response) => {
    try {
      const result = await progress.read()  
      
      return res.status(200).json({
        status: "Success Get all progress",
        data: result
      })
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error",
      })
    }
  }

  create = async (req: express.Request, res: express.Response) => {
    try {
      await progress.create(req.body.name, req.body.desc, req.body.type)  

      return res.status(200).json({
        status: "Success Create progress item"
      })
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error"
      })
    }
  }

  update = async (req: express.Request, res: express.Response) => {
    try {
      await progress.update(parseInt(req.query.id as string), req.body.name, req.body.desc)

      return res.status(200).json({
        status: "Success Update progress item"
      })
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error"
      })
    }
  }

  delete = async (req: express.Request, res: express.Response) => {
    try {
      await progress.delete(parseInt(req.query.id as string))

      return res.status(200).json({
        status: "Success delete progress item"
      })
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error"
      })
    }
  }
}

export default new ProgressController();