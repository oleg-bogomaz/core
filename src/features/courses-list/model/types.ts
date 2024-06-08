type CourseListElementType = {
    id: string
    name: string
    description: string
}

type CreateCourseListElementCommandType = {
    name: string
    description: string
}

type DeleteCourseListElementCommandType = {
    id: string
}
