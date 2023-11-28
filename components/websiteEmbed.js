import { Card, CardBody, CardFooter, CardHeader, Image, Link } from "@nextui-org/react"

const WebsiteEmbed = ({ link, title, desc }) => {
    return (
    
    <Card radius="lg"  className="flex-none w-[350px] h-[350px]">
        <embed type="text/html" src={link} width="350" height="300"></embed>
        <CardFooter className="whitespace-pre-line inline-block">
            <Link color="success" size="sm" isExternal showAnchorIcon href={link}>{title} </Link>
            <br/><p className="text-sm inline whitespace-pre-wrap">{desc}</p>
        </CardFooter>
    </Card>
    
    );
  };
  
  export default WebsiteEmbed;