<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Categorias;

class CategoriasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categorias = [["Front-End", "A front-end developer focuses on the “front”-facing portions of websites and web applications, which is what users will see and interact with. This can include things such as buttons on the page, interactable objects, scrolling, and text color. Front-end developers often work with HTML, CSS, and JavaScript to ensure the app or site is working as intended. They also make sure the site is easy to read and navigate."], ["Back-End", "In contrast to front-end developers, back-end developers focus on the server side. They make sure that the website or application works as intended, keeps running with little to no downtime, has no bugs or glitches, and follows through on intended actions. They work with databases, back-end logic, APIs, and more."], ["Full Stack", "Full-stack developers are more flexible and can work the front and back ends of websites and applications. They often work in a variety of niches and have many skills that allow them to seamlessly transition from one area of the website or app to another. They might do graphic design work, ensure a build is structurally sound, and/or write code to support the development of a project."], ["Mobile", "Mobile developers specialize in mobile app or web development, focusing on building for Android, iOS, and Windows platforms for Google, Apple, and Microsoft. The functionality of mobile websites and applications differs from that of computers and requires a different set of programming languages and UX/UI design knowledge."], ["Web", "Just as a mobile developer has to understand different nuances of mobile platforms, so do web developers. Web developers often specialize in building websites using JavaScript, HTML, CSS, and more. Web developers need technical skills, but also creative and visual skills to ensure the website looks good and functions properly, with intuitive interactions."], ["Software", "Just as a mobile developer has to understand different nuances of mobile platforms, so do web developers. Web developers often specialize in building websites using JavaScript, HTML, CSS, and more. Web developers need technical skills, but also creative and visual skills to ensure the website looks good and functions properly, with intuitive interactions."], ["Game", "Game developers work specifically on video games, which take programming languages and computer programs to create visually appealing and interactive projects. They can work on video games for console, PC, and mobile platforms, and can work on anything from missions to levels to characters, and more."], ["DevOps", "DevOps is a combination of software development and IT. DevOps engineers work to unify and automate processes that are crucial for applications to run properly. DevOps developers help to ensure that an organization can keep delivering apps and services without interruption, and in increasing volume."], ["Security", "A security software developer works directly with software development teams. They create new technologies and update programs to ensure that security systems are up-to-date and that no breaches can occur within new code and applications. Cybersecurity is a good career because these professionals are integral to any organization."]];
        foreach ($categorias as $categoria) {
            Categorias::create([
                'name' => $categoria[0],
                'descripcion' => $categoria[1],
            ]);
        }
    }
}
