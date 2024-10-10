import { useForm, useWatch } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/lib/ui/form";
import { Input } from "@/lib/ui/input";
import { Label } from "@/lib/ui/label";
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
    length: z.coerce.number({
        required_error: "Length is required",
        invalid_type_error: "Length must be a number",
    }).gt(0),
    weight: z.coerce.number({
        required_error: "Length is required",
        invalid_type_error: "Length must be a number",
    }).gt(0),
    diameter: z.coerce.number({
        required_error: "Length is required",
        invalid_type_error: "Length must be a number",
    }).gt(0),
})

export function FilamentDensityCalculator() {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        mode: "onChange"
    });

    const data = useWatch({ control: form.control });

    console.log(data);

    return (
        <Form {...form}>
            <form className="grid grid-cols-2 gap-9">
                <div className="flex flex-col">
                    <FormField
                        control={form.control}
                        name="length"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Length in meters</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. 0.5m" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="weight"
                        render={({ field }) => (
                            <FormItem className="mt-3">
                                <FormLabel>Weight in grams</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. 2g" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="diameter"
                        render={({ field }) => (
                            <FormItem className="mt-3">
                                <FormLabel>Diameter in millimeters</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. 1.75mm" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                </div>

                <div className="flex flex-col">
                    <div className="space-y-2">
                        <Label htmlFor="density">Density</Label>
                        <Input readOnly
                            id="density"
                            value={""}
                            disabled={!form.formState.isValid}
                            placeholder={form.formState.isValid ? "" : "Invalid Inputs"}></Input>
                    </div>
                </div>

            </form>
        </Form>
    )
}
