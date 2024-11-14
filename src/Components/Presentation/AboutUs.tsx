import Card from '../Card';
import { Description, Objectives } from 'Components/Presentation';
export function AboutUs() {
  return (
    <div className="space-y-4 p-3 sm:p-4 md:p-6 lg:p-10">
      <Card>
        <Card.Header>
          <Card.Header.Title title="Sobre Nos" />
        </Card.Header>
        <Card.Body>
          <main className="grid min-h-full place-items-center px-4 py-12 sm:py-16 lg:px-6">
            <Description />
            <Objectives />
          </main>
        </Card.Body>
      </Card>
    </div>
  );
}
