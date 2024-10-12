import { MathJax } from "better-react-mathjax";
import { useMemo } from "react";
import { useForm } from "react-hook-form"
import { FaRegClipboard, FaRegTrashCan } from "react-icons/fa6";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useCopyToClipboard } from "usehooks-ts";
import { z } from "zod"
import { emptyAsUndefined } from "@/components/utilities/zod";
import { Button } from "@/lib/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/lib/ui/form";
import { Input } from "@/lib/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    start: emptyAsUndefined(z.coerce.number({
        required_error: "Start is required",
        invalid_type_error: "Start must be a number"
    }).gte(0)),
    measured: emptyAsUndefined(z.coerce.number({
        required_error: "Measured is required",
        invalid_type_error: "Measured must be a number"
    }).gte(0)),
    step: emptyAsUndefined(z.coerce.number({
        required_error: "Interval is required",
        invalid_type_error: "Interval must be a number"
    }).gt(0)),
})

export function OrcaRetractionCalculator() {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        mode: "onChange",
        defaultValues: {
            start: 0,
            measured: 4,
            step: 0.1
        }
    });

    const { getFieldState, watch, formState: { isValid } } = form;
    const { start, measured, step } = watch();

    const idealRetraction = useMemo(() => {
        if (isValid) {
            const result = (Math.floor(measured) * step) + parseFloat(start as never);
            return Math.round(result * 100) / 100;
        }
        return undefined;
    }, [isValid, start, measured, step]);

    const [, copy] = useCopyToClipboard()

    return (
        <Form {...form}>
            <div className="flex flex-col">
                <div className="grid grid-cols-1 gap-3">
                    <FormField
                        control={form.control}
                        name="start"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Starting Retraction length (mm)</FormLabel>
                                <FormDescription>The start retraction length set in OrcaSlicer.</FormDescription>
                                <FormControl>
                                    <Input placeholder="e.g. 0mm" {...field} />
                                </FormControl>
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="step"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Retraction Step (mm per mm)</FormLabel>
                                <FormDescription>The step size set in OrcaSlicer.</FormDescription>
                                <FormControl>
                                    <Input placeholder="e.g. 0.1mm" {...field} />
                                </FormControl>
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="measured"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Measured Height (mm)</FormLabel>
                                <FormDescription>The measured height of the best looking retraction.</FormDescription>
                                <FormControl>
                                    <Input placeholder="e.g. 4mm" {...field} />
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
                            \\require{mathtools}
                            \\DeclarePairedDelimiter\\ceil{\\lceil}{\\rceil}
                            \\DeclarePairedDelimiter\\floor{\\lfloor}{\\rfloor}

                            \\begin{aligned}

                            {${getFieldState("start").invalid ? "start" : start}}\\,mm

                            & + (
                                {${getFieldState("step").invalid ? "step" : step}}\\,mm
                                \\floor*{{${getFieldState("measured").invalid ? "measured" : measured}\\,mm}}
                            )\\\\

                            & ${isValid ? "\\approx" : "="}
                            ${isValid ? idealRetraction : "ideal"}\\,mm


                            \\end{aligned}

                        $$`}</MathJax>
                    </div>
                    <div className="flex flex-row sm:flex-col sm:space-y-3 space-x-3 sm:space-x-0 basis-1/4 mt-6">
                        <Button disabled={!idealRetraction} onClick={() => void copy(idealRetraction!.toString())}>
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
