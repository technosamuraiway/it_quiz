import s from './Home.module.scss'
import Typography from "../../shared/components/typography";

const mockCategories = [
    {
        id: 1,
        title: 'HTML',
    }, {
        id: 2,
        title: 'CSS',
    }, {
        id: 3,
        title: 'GIT',
    }, {
        id: 4,
        title: 'JavaScript',
    }, {
        id: 5,
        title: 'TypeScript',
    }, {
        id: 6,
        title: 'React',
    }, {
        id: 7,
        title: 'Computer Science',
    },
]

function Home() {
    function formatDateToCustomFormat(date: Date): string {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);

        return `${year}${month}${day}`;
    }
    return (
        <div className={s.container}>
            <div className={s.contentBlock}>
                <div className={s.header}>
                    <div>
                        <Typography weight={'medium'} pointer variant={'h1'} underline>главная</Typography>
                        <Typography weight={'medium'} pointer variant={'h1'}>вопросы</Typography>
                    </div>
                </div>
                <div className={s.title}>
                    <div></div>
                    <Typography weight={'medium'} variant={'h2'}>Категории</Typography>
                    <div></div>
                </div>
                <div className={s.categories}>
                    {mockCategories.map((category: any) => (<div key={category.id} className={s.category}>
                        <Typography weight={'normal'} variant={'h2'}>{category.title}</Typography>
                    </div>))}
                </div>
                <img src="/keyboard.svg" alt="keyboard"/>
                <div className={s.footer}>
                    <Typography variant={'h3'} weight={'normal'} >build:{formatDateToCustomFormat(new Date())}</Typography>
                    <Typography variant={'h3'} weight={'normal'}>technosamuraiway</Typography>
                </div>
            </div>
        </div>
    )
}


export default Home
