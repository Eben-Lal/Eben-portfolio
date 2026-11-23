import Container from "../components/Container";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { DocumentIcon, DownloadIcon } from "../components/Icons";
import { profile } from "../data/profile";

export default function ResumeCTA() {
  const { url, downloadName } = profile.resume;
  return (
    <section aria-labelledby="resume-title" className="pb-20 sm:pb-24 lg:pb-28">
      <Container>
        <Reveal className="flex flex-col gap-8 rounded-[1.75rem] border border-line bg-surface p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div className="max-w-[44ch]">
            <h2 id="resume-title" className="text-[1.75rem] font-bold leading-tight tracking-[-0.025em] text-ink sm:text-[2.125rem]">
              Want the full picture?
            </h2>
            <p className="mt-3 text-lg text-muted">
              My resume has the complete details of my experience, education and skills.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={url} icon={<DocumentIcon width={18} height={18} />} target="_blank" rel="noopener">
              View resume
            </Button>
            <Button href={url} variant="secondary" download={downloadName} icon={<DownloadIcon width={18} height={18} />}>
              Download resume
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
