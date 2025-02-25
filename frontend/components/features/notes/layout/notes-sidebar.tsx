'use client';

import { useState } from 'react';
import { NoteTree } from '../tree/note-tree';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { CreateNoteDialog } from '../dialogs/create-note-dialog';

export function NotesSidebar() {
	const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

	return (
		<div className="flex h-full flex-col">
			<div className="flex items-center justify-between p-4 border-b">
				<h2 className="text-lg font-semibold">Notes</h2>
				<Button
					size="icon"
					variant="ghost"
					onClick={() => setIsCreateDialogOpen(true)}
					className="h-8 w-8"
				>
					<Plus className="h-4 w-4" />
				</Button>
			</div>

			<div className="pl-5">
				<NoteTree width={232} />
			</div>

			<CreateNoteDialog
				open={isCreateDialogOpen}
				onOpenChange={setIsCreateDialogOpen}
			/>
		</div>
	);
}
