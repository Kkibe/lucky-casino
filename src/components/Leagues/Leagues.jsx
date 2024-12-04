import './Leagues.scss'

export default function Leagues() {
  return (
    <div className='leagues'>
        <div className="leagues-container">
      <div className="item">
        <div className="image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69X2BDzIg_SQdWRxMlqPL872YPNTOatrcvM3gNwu_jbQ4m3ryjDzjX6XCZDp6IgERK8U&usqp=CAU"/>
        </div>
        <h2>Premier League</h2>
      </div>
      <div className="item">
        <div className="image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs9r058FT10IsFJWtuHJpJVDIP6o15QDvcWsxHeQHRvFnAekpccDEhRhGIP8iq2GTYWdM&usqp=CAU"/>
        </div>
        <h2>Laliga</h2>
      </div>
      <div className="item">
        <div className="image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdudbJBrzV2AfOpGEaMZ4J2UmkQkCdFXeAECXmYLuI5I-dSHaWqbUc-iLEhmVmc7ErHvU&usqp=CAU"/>
        </div>
        <h2>Serie A</h2>
      </div>
      <div className="item">
        <div className="image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIK0hIS7yBwMLwzUK2InDyUMccFkWT1rrUPKxo94FZeDIOwnaR7dIuV1yX_zufktveRhY&usqp=CAU"/>
        </div>
        <h2>Bundesliga</h2>
      </div>
      <div className="item">
        <div className="image">
          <img src="data:image/jpeg;base64,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"/>
        </div>
        <h2>Ligue 1</h2>
      </div>
      <div className="item">
        <div className="image">
          <img src="data:image/png;base64,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"/>
        </div>
        <h2>Primeira Liga</h2>
      </div>
        </div>




    <h1><img src="//dl.dropboxusercontent.com/s/8oxj00hznpqm5l0/logoliga.png" alt="Logo Liga" width="300px" height="100px" /></h1>
    <div id="content">
        <table id="teams" border="0" cellSpacing="0" cellPadding="0">
          <thead>
              <tr>
                  <th className="borederleft">Position</th>
                  <th>Teams</th>
                  <th>Played</th>
                  <th>Won</th>
                  <th>Drawn</th>
                  <th>Lost</th>
                  <th>GS</th>
                  <th>GA</th>
                  <th className="borderright">Points</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td id="clteam">1º</td>
                  <td>
                    <div id="teamsnames">
                        <img src="//dl.dropboxusercontent.com/s/9ec3vhpvkrr96q8/fcplogo.png" width="25px" height="25px"/>
                        <span id="tn">&nbsp;Porto</span>
                  </div>
                </td>
                  <td>34</td>
                  <td>28</td>
                  <td>4</td>
                  <td>2</td>
                  <td>82</td>
                  <td>18</td>
                  <td>88</td>
                </tr>
                <tr>
                  <td id="clplayoff">2º</td>
                  <td>
                    <div id="teamsnames">
                        <img src="//dl.dropboxusercontent.com/s/ee4d9y2crsl2t3j/slblogo.png" width="25px" height="25px"/>
                        <span id="tn">&nbsp;SL Benfica</span>
                    </div>
                  </td>
                  <td>34</td>
                  <td>25</td>
                  <td>6</td>
                  <td>3</td>
                  <td>80</td>
                  <td>22</td>
                  <td>81</td>
                </tr>
                <tr>
                  <td id="elteams">3º</td>
                  <td>
                    <div id="teamsnames">
                        <img src="//dl.dropboxusercontent.com/s/mfunwpohf0f6elx/scplogo.png" width="25px" height="25px"/>
                        <span id="tn">&nbsp;Sporting CP</span>
                    </div>
                  </td>
                  <td>34</td>
                  <td>24</td>
                  <td>6</td>
                  <td>4</td>
                  <td>63</td>
                  <td>24</td>
                  <td>78</td>
                </tr>
                <tr>
                  <td id="elteams">4º</td>
                  <td>
                    <div id="teamsnames">
                      <img src="//dl.dropboxusercontent.com/s/u3w6sz9s1fruyvv/bragalogo.png" width="25px" height="25px" />
                      <span id="tn">&nbsp;SC Braga</span>
                    </div>
                  </td>
                  <td>34</td>
                  <td>24</td>
                  <td>3</td>
                  <td>7</td>
                  <td>74</td>
                  <td>29</td>
                  <td>75</td>
                </tr>
                <tr>
                  <td>5º</td>
                  <td>
                    <div id="teamsnames">
                      <img src="//dl.dropboxusercontent.com/s/gqxki2f1fax51vz/rioavelogo.png" width="25px" height="25px"/>
                      <span id="tn">&nbsp;Rio Ave FC</span>
                    </div>
                  </td>
                  <td>34</td>
                  <td>15</td>
                  <td>6</td>
                  <td>13</td>
                  <td>40</td>
                  <td>42</td>
                  <td>51</td>
                </tr>
                <tr>
                  <td>6º</td>
                  <td>
                    <div id="teamsnames">
                      <img src="//dl.dropboxusercontent.com/s/cpsi5ojm9zn2ujk/gdchaveslogo.png" width="25px" height="25px"/>
                      <span id="tn">&nbsp;GD Chaves</span>
                    </div>
                  </td>
                  <td>34</td>
                  <td>13</td>
                  <td>8</td>
                  <td>13</td>
                  <td>47</td>
                  <td>55</td>
                  <td>47</td>
                </tr>
                <tr>
                  <td>7º</td>
                  <td>
                    <div id="teamsnames">
                      <img src="//dl.dropboxusercontent.com/s/cpjk7jvy89m7ac4/maritimologo.png" width="25px" height="25px"/>
                      <span id="tn">&nbsp;Marítimo M.</span>
                    </div>
                  </td>
                  <td>34</td>
                  <td>13</td>
                  <td>8</td>
                  <td>13</td>
                  <td>36</td>
                  <td>49</td>
                  <td>47</td>
                </tr>
                <tr>
                  <td>8º</td>
                  <td>
                    <div id="teamsnames">
                      <img src="//dl.dropboxusercontent.com/s/ub13tqw45g5gs0t/boavistalogo.png" width="25px" height="25px"/>
                      <span id="tn">&nbsp;Boavista FC</span>
                    </div>
                  </td>
                  <td>34</td>
                  <td>13</td>
                  <td>6</td>
                  <td>15</td>
                  <td>35</td>
                  <td>44</td>
                  <td>45</td>
                </tr>
                <tr>
                  <td>9º</td>
                  <td>
                    <div id="teamsnames">
                      <img src="//dl.dropboxusercontent.com/s/cfd5kjvfc236fbj/vitoriasclogo.png" width="25px" height="25px"/>
                      <span id="tn">&nbsp;Vitória SC</span>
                    </div>
                  </td>
                  <td>34</td>
                  <td>13</td>
                  <td>4</td>
                  <td>17</td>
                  <td>45</td>
                  <td>56</td>
                  <td>43</td>
                </tr>
                <tr>
                  <td>10º</td>
                  <td>
                    <div id="teamsnames">
                      <img src="//dl.dropboxusercontent.com/s/vono969tyvyq70o/portimonenselogo.png" width="25px" height="25px"/>
                      <span id="tn">&nbsp;Portimonense</span>
                    </div>
                  </td>
                  <td>34</td>
                  <td>10</td>
                  <td>8</td>
                  <td>16</td>
                  <td>52</td>
                  <td>60</td>
                  <td>38</td>
                </tr>
                <tr>
                  <td>11º</td>
                  <td>
                    <div id="teamsnames">
                      <img src="//dl.dropboxusercontent.com/s/8693a7uhvib0ngk/tondelalogo.png" width="25px" height="25px"/>
                      <span id="tn">&nbsp;CD Tondela</span>
                    </div>
                  </td>
                  <td>34</td>
                  <td>10</td>
                  <td>8</td>
                  <td>16</td>
                  <td>41</td>
                  <td>50</td>
                  <td>38</td>
                </tr>
                <tr>
                  <td>12º</td>
                  <td>
                    <div id="teamsnames">
                      <img src="//dl.dropboxusercontent.com/s/1wl9jl0djeicetk/belenenses.png" width="25px" height="25px"/>
                      <span id="tn">&nbsp;Os Belenenses</span>
                    </div>
                  </td>
                  <td>34</td>
                  <td>9</td>
                  <td>10</td>
                  <td>15</td>
                  <td>33</td>
                  <td>46</td>
                  <td>37</td>
                </tr>
                <tr>
                  <td>13º</td>
                  <td>
                    <div id="teamsnames">
                      <img src="//dl.dropboxusercontent.com/s/q3wxtbbr12sobuo/aveslogo.png" width="25px" height="25px"/>
                      <span id="tn">&nbsp;CD Aves</span>
                    </div>
                  </td>
                  <td>34</td>
                  <td>9</td>
                  <td>7</td>
                  <td>18</td>
                  <td>36</td>
                  <td>51</td>
                  <td>34</td>
                </tr>
                <tr>
                  <td>14º</td>
                  <td>
                    <div id="teamsnames">
                      <img src="//dl.dropboxusercontent.com/s/fkuiutor0q436kf/vitoriafclogo.png" width="25px" height="25px"/>
                      <span id="tn">&nbsp;Vitória FC</span>
                    </div>
                  </td>
                  <td>34</td>
                  <td>7</td>
                  <td>11</td>
                  <td>16</td>
                  <td>39</td>
                  <td>62</td>
                  <td>32</td>
                </tr>
                <tr>
                  <td>15º</td>
                  <td>
                    <div id="teamsnames">
                      <img src="//dl.dropboxusercontent.com/s/72a8fcc5cydeupb/moreirenselogo.png" width="25px" height="25px"/>
                      <span id="tn">&nbsp;Moreirense FC</span>
                    </div>
                  </td>
                  <td>34</td>
                  <td>8</td>
                  <td>8</td>
                  <td>18</td>
                  <td>29</td>
                  <td>50</td>
                  <td>32</td>
                </tr>
                <tr>
                  <td>16º</td>
                  <td>
                    <div id="teamsnames">
                      <img src="//dl.dropboxusercontent.com/s/ktko5zts3btvl4g/feirenselogo.png" width="25px" height="25px"/>
                      <span id="tn">&nbsp;CD Feirense</span>
                    </div>
                  </td>
                  <td>34</td>
                  <td>9</td>
                  <td>4</td>
                  <td>21</td>
                  <td>32</td>
                  <td>48</td>
                  <td>31</td>
                </tr>
                <tr>
                  <td id="downteams">17º</td>
                  <td>
                    <div id="teamsnames">
                      <img src="//dl.dropboxusercontent.com/s/wdtpzkl2g2vgctu/pferreiralogo.png" width="25px" height="25px"/>
                      <span id="tn">&nbsp;FC P.Ferreira</span>
                    </div>
                  </td>
                  <td>34</td>
                  <td>7</td>
                  <td>9</td>
                  <td>18</td>
                  <td>33</td>
                  <td>59</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td id="downteams" className="borderbottomleft">18º</td>
                  <td>
                    <div id="teamsnames">
                      <img src="//dl.dropboxusercontent.com/s/j8yri92erwopvz0/estorillogo.png" width="25px" height="25px"/>
                      <span id="tn">&nbsp;Estoril Praia</span>
                    </div>
                  </td>
                  <td>34</td>
                  <td>8</td>
                  <td>6</td>
                  <td>20</td>
                  <td>29</td>
                  <td>61</td>
                  <td className="borderbottomright">30</td>
                </tr>
          </tbody>
        </table>
    </div>
    <br/>
    <span>
        <div className="tableinfo">
          <div id="clteam" className="colordiv"></div>
          &nbsp;
          <p>Champions Ligue</p>
      </div>
      <div className="tableinfo">
          <div id="clplayoff" className="colordiv"></div>
          &nbsp;
          <p>Champions Ligue play-off</p>
      </div>
      <div className="tableinfo">
          <div id="elteams" className="colordiv"></div>
          &nbsp;
          <p>Europe Ligue</p>
      </div>
      <div className="tableinfo">
          <div id="downteams" className="colordiv"></div>
          &nbsp;
          <p>2º Ligue</p>
      </div>
    </span>
    <br></br>
    </div>
  )
}
