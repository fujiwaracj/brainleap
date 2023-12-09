import { CloseDialog } from '@/components/close-dialog'
import { ModalBackground } from '@/components/modal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { addClass } from '@/lib/actions'

export default function Page() {
	const action = async (formData: FormData) => {
		'use server'
		addClass(formData)
	}
	return (
		<ModalBackground>
			<form
				action={action}
				className="flex flex-col space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-border p-4 rounded bg-card w-64"
			>
				<div className="grid items-center">
					<CloseDialog />
				</div>
				<fieldset>
					<legend className="text-lg font-semibold my-2">
						Add a class
					</legend>
					<Label htmlFor="title">Class Title</Label>
					<Input
						type="text"
						id="title"
						name="title"
						placeholder="Class Title"
					/>
					<Label htmlFor="description">Class Description</Label>
					<Textarea
						id="description"
						name="description"
						placeholder="Class Description"
					/>
				</fieldset>
				<Button type="submit">Add Class</Button>
			</form>
		</ModalBackground>
	)
}