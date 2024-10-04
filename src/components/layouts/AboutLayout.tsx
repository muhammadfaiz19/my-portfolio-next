import TextReveal from "@/components/magicui/text-reveal";



const AboutLayout = () => {
    return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center  text-sm bg-black dark:bg-white">
        <TextReveal
          text={`Halo! Nama saya Muhammad Faiz, saat ini saya sedang menempuh semester 5 pada jurusan Teknik Informatika di Universitas Muhammadiyah Cirebon. Saya memiliki minat yang mendalam dalam pengembangan perangkat lunak, khususnya di bidang web development dengan fokus pada ekosistem JavaScript seperti MERN Stack (MongoDB, Express.js, React, Node.js. Selama kuliah, saya aktif berpartisipasi dalam berbagai proyek akademis dan organisasi kampus, di mana saya belajar bekerja dalam tim, mengatasi tantangan teknis, dan berkolaborasi untuk menciptakan solusi yang efektif. Saya percaya bahwa inovasi dan kerja sama adalah kunci untuk menghadapi tantangan di dunia teknologi yang terus berkembang`}

        />
      </div>

    )
} 

export default AboutLayout;