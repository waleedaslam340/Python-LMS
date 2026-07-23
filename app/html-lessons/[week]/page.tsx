import { htmlCurriculum as curriculum } from '@/lib/curriculum/html-data';
import LessonViewer from '@/components/LessonViewer';
import { notFound } from 'next/navigation';

export default async function HTMLLessonPage({ params }: { params: Promise<{ week: string }> }) {
  const { week } = await params;
  const weekNum = parseInt(week);
  
  const lesson = curriculum.find((l) => l.week === weekNum);

  if (!lesson) {
    notFound();
  }

  return (
    <main>
      <LessonViewer lesson={lesson} />
    </main>
  );
}
