"use client"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"
import { Textarea } from "@/shared/ui/textarea"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTransition } from "react"
import { createCourseAction } from "../actions"
import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/ui/utils"

const createCourseFormSchema = z.object({
    name: z.string(),
    description: z.string(),
})

export const CreateCourseForm = ({
    revalidatePagePath,
    className,
}: {
    revalidatePagePath: string
    className: string
}) => {
    const [isCreateTransition, startCreateTransition] = useTransition()
    const form = useForm({
        resolver: zodResolver(createCourseFormSchema),
        defaultValues: {
            name: "",
            description: "",
        },
    })
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit((data) => {
                    startCreateTransition(async () => {
                        createCourseAction(data, revalidatePagePath)
                    })
                })}
                className={cn(className, "space-y-8")}
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Название</FormLabel>
                            <FormControl>
                                <Input placeholder="название..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Описание</FormLabel>
                            <FormControl>
                                <Textarea placeholder="описание..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={isCreateTransition} type="submit">
                    Добавить
                </Button>
            </form>
        </Form>
    )
}
