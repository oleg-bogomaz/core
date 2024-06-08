"use server"

import { revalidatePath } from "next/cache"
import { coursesRepository } from "./courses.repository"

export const createCourseAction = async (
    command: CreateCourseListElementCommandType,
    revalidatePagePath: string,
) => {
    await coursesRepository.createCourseElement(command)
    revalidatePath(revalidatePagePath)
}
