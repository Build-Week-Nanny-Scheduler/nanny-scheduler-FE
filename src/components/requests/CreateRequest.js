import React, { useState, useEffect } from "react";

import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const CreateRequestFrom = ({ values, errors, touched }) => {
  const [requestForm, setRequestForm] = useState([]);

  return (
    <>
      <div>
        <h1>Create Request</h1>
      </div>
      <Form>
        <Field type="text" name="city" placeholder="Your City" />
        {touched.city && errors.city && <p>{errors.city}</p>}

        <Field
          as="select"
          name="state"
        >
          <option>Please Choose Your State</option>
          <option value="Alabama">Alabama</option>
          <option value="Alaska">Alaska</option>
          <option value="Arizona">Arizona</option>
          <option value="Arkansas">Arkansas</option>
          <option value="California">California</option>
          <option value="Colorado">Colorado</option>
          <option value="Connecticut">Connecticut</option>
          <option value="Delaware">Delaware</option>
          <option value="Florida">Florida</option>
          <option value="Georgia">Georgia</option>
          <option value="Hawaii">Hawaii</option>
          <option value="Idaho">Idaho</option>
          <option value="Illinois">Illinois</option>
          <option value="Indiana">Indiana</option>
          <option value="Iowa">Iowa</option>
          <option value="Kansas">Kansas</option>
          <option value="Kentucky">Kentucky</option>
          <option value="Louisiana">Louisiana</option>
          <option value="Maine">Maine</option>
          <option value="Maryland">Maryland</option>
          <option value="Massachusetts">Massachusetts</option>
          <option value="Michigan">Michigan</option>
          <option value="Minnesota">Minnesota</option>
          <option value="Mississippi">Mississippi</option>
          <option value="Missouri">Missouri</option>
          <option value="Montana">Montana</option>
          <option value="Nebraska">Nebraska</option>
          <option value="Nevada">Nevada</option>
          <option value="New Hampshire">New Hampshire</option>
          <option value="New Jersey">New Jersey</option>
          <option value="New Mexico">New Mexico</option>
          <option value="New York">New York</option>
          <option value="North Carolina">North Carolina</option>
          <option value="North Dakota">North Dakota</option>
          <option value="Ohio">Ohio</option>
          <option value="Oklahoma">Oklahoma</option>
          <option value="Oregon">Oregon</option>
          <option value="Pennsylvania">Pennsylvania</option>
          <option value="Rhode Island">Rhode Island</option>
          <option value="South Carolina">South Carolina</option>
          <option value="South Dakota">South Dakota</option>
          <option value="Tennessee">Tennessee</option>
          <option value="Texas">Texas</option>
          <option value="Utah">Utah</option>
          <option value="Vermont">Vermont</option>
          <option value="Virginia">Virginia</option>
          <option value="Washington">Washington</option>
          <option value="West Virginia">West Virginia</option>
          <option value="Wisconsin">Wisconsin</option>
          <option value="Wyoming">Wyoming</option>
        </Field>
        {touched.state && errors.state && <p>{errors.state}</p>}

        <Field type="text" name="numberOfKids" placeholder="How Many Kids" />
        {touched.numberOfKids && errors.numberOfKids && <p>{errors.numberOfKids}</p>}

        <Field type="text" name="kidsAge" placeholder="Age of Kid(s)" />
        {touched.kidsAge && errors.kidsAge && <p>{errors.kidsAge}</p>}
        {/*HOw do we deal with more than one age, when more than one kid?*/}

        <div>
          <Field
            as="select"
            name="startTimeH"
          >
            <option>HH</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
          </Field>
          {touched.startTimeH && errors.startTimeH && <p>{errors.startTimeH}</p>}

          <Field
            as="select"
            name="startTimeM"
          >
            <option>MM</option>
            <option value="">0</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
            <option value="">13</option>
            <option value="">14</option>
            <option value="">15</option>
            <option value="">16</option>
            <option value="">17</option>
            <option value="">18</option>
            <option value="">19</option>
            <option value="">20</option>
            <option value="">21</option>
            <option value="">22</option>
            <option value="">23</option>
            <option value="">24</option>
            <option value="">25</option>
            <option value="">26</option>
            <option value="">27</option>
            <option value="">28</option>
            <option value="">29</option>
            <option value="">30</option>
            <option value="">31</option>
            <option value="">32</option>
            <option value="">33</option>
            <option value="">34</option>
            <option value="">35</option>
            <option value="">36</option>
            <option value="">37</option>
            <option value="">38</option>
            <option value="">39</option>
            <option value="">40</option>
            <option value="">41</option>
            <option value="">42</option>
            <option value="">43</option>
            <option value="">44</option>
            <option value="">45</option>
            <option value="">46</option>
            <option value="">47</option>
            <option value="">48</option>
            <option value="">49</option>
            <option value="">50</option>
            <option value="">51</option>
            <option value="">52</option>
            <option value="">53</option>
            <option value="">54</option>
            <option value="">55</option>
            <option value="">56</option>
            <option value="">57</option>
            <option value="">58</option>
            <option value="">59</option>
          </Field>
          {touched.startTimeM && errors.startTimeM && <p>{errors.startTimeM}</p>}

          <Field
            as="select"
            name="startAMPM"
          >
            <option>AM or PM?</option>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </Field>
          {touched.startAMPM && errors.startAMPM && <p>{errors.startAMPM}</p>}
        </div>

        <div>
          <Field
            as="select"
            name="endTimeH"
          >
            <option>HH</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
          </Field>
          {touched.endTimeH && errors.endTimeH && <p>{errors.endTimeH}</p>}

          <Field
            as="select"
            name="endTimeM"
          >
            <option>MM</option>
            <option value="">0</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
            <option value="">13</option>
            <option value="">14</option>
            <option value="">15</option>
            <option value="">16</option>
            <option value="">17</option>
            <option value="">18</option>
            <option value="">19</option>
            <option value="">20</option>
            <option value="">21</option>
            <option value="">22</option>
            <option value="">23</option>
            <option value="">24</option>
            <option value="">25</option>
            <option value="">26</option>
            <option value="">27</option>
            <option value="">28</option>
            <option value="">29</option>
            <option value="">30</option>
            <option value="">31</option>
            <option value="">32</option>
            <option value="">33</option>
            <option value="">34</option>
            <option value="">35</option>
            <option value="">36</option>
            <option value="">37</option>
            <option value="">38</option>
            <option value="">39</option>
            <option value="">40</option>
            <option value="">41</option>
            <option value="">42</option>
            <option value="">43</option>
            <option value="">44</option>
            <option value="">45</option>
            <option value="">46</option>
            <option value="">47</option>
            <option value="">48</option>
            <option value="">49</option>
            <option value="">50</option>
            <option value="">51</option>
            <option value="">52</option>
            <option value="">53</option>
            <option value="">54</option>
            <option value="">55</option>
            <option value="">56</option>
            <option value="">57</option>
            <option value="">58</option>
            <option value="">59</option>
          </Field>
          {touched.endTimeM && errors.endTimeM && <p>{errors.endTimeM}</p>}

          <Field
            as="select"
            name="endAMPM"
          >
            <option>AM or PM?</option>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </Field>
          {touched.endAMPM && errors.endAMPM && <p>{errors.endAMPM}</p>}
        </div>



        <button type="submit">Submit</button>

      </Form>
    </>
  );
};

export const CreateRequest = withFormik({
  mapPropsToValues({ city, state, numberOfKids, kidsAge, startTimeH, startTimeM, startAMPM, endTimeH, endTimeM, endAMPM }) {
    return {
      city: city || "",
      state: state || "",
      numberOfKids: numberOfKids || "",
      kidsAge: kidsAge || "",
      startTimeH: startTimeH || "",
      startTimeM: startTimeM || "",
      startAMPM: startTimeH || "",
      endTimeH: startTimeH || "",
      endTimeM: startTimeM || "",
      endAMPM: startTimeH || "",
    };
  },
  validationSchema: Yup.object().shape({
    city: Yup.string().required(),
    state: Yup.string().required(),
    numberOfKids: Yup.string().required(),
    kidsAge: Yup.string().required(),
    startTimeH: Yup.string().required(),
    startTimeM: Yup.string().required(),
    startAMPM: Yup.string().required(),
    endTimeH: Yup.string().required(),
    endTimeM: Yup.string().required(),
    endAMPM: Yup.string().required(),
  })
})(CreateRequestFrom);


/*
data needed for creating a request:
city
state
numberOfKids
kidsAge
timeNeeded
*/
