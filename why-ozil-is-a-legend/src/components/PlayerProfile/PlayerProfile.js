import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import ozilreal from "../../rss/img/ozilrealmadrid.png";
import "./profile.css";
const PlayerProfile = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={6} md={5}>
          <Card>
            <Card.Body>
              <Card.Title>Mesut Özil</Card.Title>
              <Card.Text>
                Mesut Özil (prononcé en allemand : [ˈmeːzut ˈøːzil]), né le 15
                octobre 1988 à Gelsenkirchen, est un footballeur international
                allemand qui évolue au poste de milieu de terrain au Fenerbahçe
                SK. Il commence sa carrière professionnelle en 2006 au FC
                Schalke 04, avant de rejoindre le Werder Brême en 2008. Il est
                transféré au Real Madrid en 2010 pour un montant de 15 millions
                d'euros. Avec le club madrilène, il remporte la Coupe d'Espagne
                en 2011 et le championnat d'Espagne en 2012. Il est transféré à
                Arsenal en 2013 pour un montant de 50 millions d'euros, ce qui
                fait de lui le joueur allemand le plus cher de l'histoire. Il
                remporte trois fois la Coupe d'Angleterre avec Arsenal en 2014,
                2015 et 2017. Il est sélectionné pour la première fois en équipe
                nationale en 2006. Il participe à la Coupe du monde 2010, à
                l'Euro 2012, à la Coupe du monde 2014, à l'Euro 2016 et à la
                Coupe du monde 2018. Il remporte la Coupe du monde 2014 avec
                l'équipe d'Allemagne. Il est élu meilleur jeune joueur allemand
                en 2009, meilleur joueur allemand en 2011, 2012, 2013 et 2015,
                et meilleur joueur de la Coupe du monde 2010. Il est également
                nommé dans l'équipe-type de la Coupe du monde 2010 et de l'Euro
                2012.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={3} md={5} className="col-image">
          <Image src={ozilreal} alt="Player Image" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerProfile;
