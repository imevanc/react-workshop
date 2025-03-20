import {Button} from '@/components/Button'
import {Heading} from '@/components/Heading'

const guides = [
    {
        href: 'https://react.dev/learn',
        name: 'React Documentation',
        description: 'The official React docs for guides, tutorials, and API references to help you build React apps.',
    },
    {
        href: 'https://developer.mozilla.org/en-US/',
        name: 'MDN Web Docs',
        description: 'A comprehensive resource for web technologies like HTML, CSS, and JavaScript with clear examples.',
    },
    {
        href: 'https://vite.dev/',
        name: 'Vite.js',
        description:
            'A modern, fast build tool and development server for React and other web projects.'
    },
    {
        href: 'https://nextjs.org/',
        name: 'Next.js',
        description:
            'A powerful React framework for building server-side rendered, static, and dynamic web apps with ease.',
    },
]

export function Guides() {
    return (
        <div className="my-16 xl:max-w-none">
            <Heading level={2} id="guides">
                Guides
            </Heading>
            <div
                className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
                {guides.map((guide) => (
                    <div key={guide.href}>
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                            {guide.name}
                        </h3>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                            {guide.description}
                        </p>
                        <p className="mt-4">
                            <Button href={guide.href} variant="text" arrow="right">
                                Read more
                            </Button>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
