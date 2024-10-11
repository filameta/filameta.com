import { MathJax } from "better-react-mathjax";
import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form"
import { FaRegClipboard, FaRegTrashCan } from "react-icons/fa6";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useCopyToClipboard } from "usehooks-ts";
import { z } from "zod"
import { Button } from "@/lib/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/lib/ui/form";
import { Input } from "@/lib/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    length: z.coerce.number({
        required_error: "Length is required",
        invalid_type_error: "Length must be a number"
    }).gt(0),
    weight: z.coerce.number({
        required_error: "Length is required",
        invalid_type_error: "Length must be a number"
    }).gt(0),
    diameter: z.coerce.number({
        required_error: "Length is required",
        invalid_type_error: "Length must be a number"
    }).gt(0),
})

export function FilamentDensityCalculator() {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        mode: "onChange",
        defaultValues: {
            diameter: 1.75,
            length: 1,
            weight: 3.1
        }
    });

    const { getFieldState } = form;


    const { diameter, length, weight } = useWatch({ control: form.control });

    const density = useMemo(() => {
        if (diameter && length && weight) {
            return Math.round(weight / (Math.PI * Math.pow(diameter / 2, 2) * length) * 100) / 100;
        }
        return undefined;
    }, [diameter, length, weight]);

    const [, copy] = useCopyToClipboard()

    return (
        <Form {...form}>
            <div className="flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <FormField
                        control={form.control}
                        name="length"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Length in meters (m)</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. 0.5m" {...field} />
                                </FormControl>
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="weight"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Weight in grams (g)</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. 2g" {...field} />
                                </FormControl>
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="diameter"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Diameter in millimeters (mm)</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. 1.75mm" {...field} />
                                </FormControl>
                            </FormItem>
                        )} />
                </div>

                <div className="flex justify-center items-center space-x-3 my-3">
                    <hr className="grow" />
                    <MdKeyboardDoubleArrowDown className="h-9 w-9 my-6 text-gray-950 dark:text-white text-opacity-70" />
                    <hr className="grow" />
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-12">
                    <div className="basis-3/4 min-h-28">
                        <MathJax dynamic>{`$$
                    \\cfrac{
                        ${getFieldState("weight").invalid ? "weight" : weight}\\,g
                    }{
                        \\pi \\, {({{\\cfrac{${getFieldState("diameter").invalid ? "diameter" : diameter}\\,mm}{2}}})}^2 \\, ${getFieldState("length").invalid ? "length" : length}\\,m
                    }
                    ${density ? "\\approx" : "="}
                    ${density || "density"}\\,g/cm^3
                    $$`}</MathJax>
                    </div>
                    <div className="flex flex-row sm:flex-col sm:space-y-3 space-x-3 sm:space-x-0 basis-1/4 mt-6">
                        <Button disabled={!density} onClick={() => void copy(density!.toString())}>
                            Copy
                            <FaRegClipboard className="ms-2" />
                        </Button>
                        <Button variant="outline" onClick={() => form.reset()}>
                            Reset
                            <FaRegTrashCan className="ms-2" />
                        </Button>
                    </div>
                </div>

            </div>
        </Form>
    )
}
