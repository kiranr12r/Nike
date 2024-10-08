import { Serv } from "../constants"
import ServiceCard from "../components/ServiceCard"

const Ser = () => {
    return (
        <section className='max-container flex justify-center flex-wrap gap-9'>
            {Serv.map((service) => (
                <ServiceCard key={service.label} {...service} />
            ))}
        </section>
    )
}

export default Ser
