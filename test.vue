<template>
    <Page>
        <template v-slot:navbar>
            <Navbar :centerLinks="true">
                <!--<template v-slot:logo>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"></Image>
                </template> -->

                <template v-slot:links>
                    <Link href="./value.js" icon="home" :underlined="false">Home</Link>

                    <Dropdown title="Services" icon="business_center">
                        <Link href="./test.js">Fortnite (V-Bucks)</Link>
                        <Link href="./test.js">GTA V Alts</Link>
                        <Link href="./test.js">Minecraft Alts</Link>
                        <Link href="./test.js">Minecraft Unban</Link>
                        <Link href="./test.js">Why is this so dumb?</Link>
                    </Dropdown>

                    <Dropdown title="Products">
                        <Link href="./test.js">HackMouse-100</Link>
                        <Link href="./test.js">AIController</Link>
                    </Dropdown>

                    <Link href="./value.js" :underlined="false">About us</Link>
                    <Input icon="search"></Input>
                </template>
            </Navbar>
        </template>

        <template v-slot:sidebar>
            <Sidebar>
                <Link href="./test.js" icon="home" :vertical="true" :largeIcon="true">Home</Link>
                <Link href="./test.js" icon="folder" :vertical="true" :largeIcon="true">Files</Link>
            </Sidebar>
        </template>

        <template v-slot:default>
            <CompactProgressBar :value="this.upcounter" color="red"></CompactProgressBar>

            <CardGroup>
                <Card>
                    <a>Why is this so good?</a><br>
                    <Button color="pink">Ask this Question</Button>
                </Card>

                <Card title="Letzte Nachricht" :notificationDot="true">
                    <template v-slot:default>
                        <Quote color="green">This is a really nice qoute which even is embeded</Quote>
                    </template>

                    <template v-slot:footer>
                        <a>von </a>
                        <a class="text-sky-700">@NiceQuotes </a>
                        <a>am 09.05 um 20:14</a>
                    </template>
                </Card>

                <Card title="Fortnite?">
                    <template v-slot:default>
                        <Quote color="red">No</Quote>
                    </template>

                    <template v-slot:footer>
                        <a>Why? NO!</a>
                    </template>
                </Card>

                <Card>
                    <Button color="green" disabled>Color is always great</Button>
                </Card>
            </CardGroup> 

            <RoundedProgressBar :value="this.upcounter" color="orange"></RoundedProgressBar>

        </template>
    </Page>
</template>

<style>
* {
    box-sizing: border-box;
}
</style>

<script>
import Page from "./components/layout/Page.vue";
import Navbar from "./components/layout/Navbar.vue";
import Link from "./components/basic/Link.vue";
import Image from "./components/basic/Image.vue";
import Dropdown from "./components/basic/Dropdown.vue";
import Sidebar from "./components/layout/Sidebar.vue";
import Input from "./components/basic/Input.vue";
import Button from "./components/basic/Button.vue";
import Card from "./components/basic/Card.vue";
import Quote from "./components/basic/Quote.vue";
import CardGroup from "./components/layout/CardGroup.vue";
import CompactProgressBar from "./components/basic/CompactProgressBar.vue";
import RoundedProgressBar from "./components/basic/RoundedProgressBar.vue";
import NotificationDot from "./components/basic/NotificationBadge.vue";
import GoogleIcon from "./components/basic/GoogleIcon.vue";

export default {
    name: "Test",
    components: { Page, Navbar, Link, Image, Dropdown, Sidebar, Input, Button, Card, Quote, CardGroup, CompactProgressBar, RoundedProgressBar, NotificationDot, GoogleIcon },
    data() {
        return { upcounter: 0 }
    },
    mounted() {
        setInterval(() => {
            this.upcounter+= Math.floor(Math.random() * 2);
        }, 100);
    }
}
</script>