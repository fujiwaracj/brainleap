import { Suspense } from 'react'
import { Header } from './header'
import { HeaderSkeleton } from './header-skeleton'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'

type Props = {
	children: React.ReactNode
}

export default async function AppShell({ children }: Props) {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		redirect('/auth/signin')
	}

	return (
		<>
			<Suspense fallback={<HeaderSkeleton />}>
				<Header />
			</Suspense>
			<div>{children}</div>
		</>
	)
}
