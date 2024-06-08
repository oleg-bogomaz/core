import { dbClient } from "@/shared/lib/db"
import { cache } from "react"

export class CoursesRepository {
    getCoursesList = cache((): Promise<CourseListElementType[]> => dbClient.course.findMany())
    createCourseElement = (
        command: CreateCourseListElementCommandType,
    ): Promise<CourseListElementType> => {
        return dbClient.course.create({ data: command })
    }
    deleteCourseElement = (command: DeleteCourseListElementCommandType) => {
        return dbClient.course.delete({ where: { id: command.id } })
    }
}

export const coursesRepository = new CoursesRepository()
