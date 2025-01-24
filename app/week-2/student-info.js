import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Romanpreet Kaur</p>
      <p>
        GitHub Repository:{' '}
        <Link href="https://github.com/Roma-tech-debug/cprg306-assignments">
          My GitHub
        </Link>
      </p>
    </div>
  );
}