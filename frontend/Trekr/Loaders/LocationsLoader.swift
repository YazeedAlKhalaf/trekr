//
//  Locations.swift
//  Trekr
//
//  Created by Yazeed AlKhalaf on 20/07/2021.
//

import Foundation

class LocationsLoader: ObservableObject {
    @Published var locations: [Location] = [Location]()
    @Published var gotData: Bool = false
    
    var primary: Location {
        locations[0]
    }
    
    init() {
        getLocations(
            completion: { locations in
                self.locations = locations
                self.gotData = true
            }
        )
    }
    
    private func getLocations(completion: @escaping ([Location]) -> ()) {
        guard
            let url = URL(string: "https://trekr-api.herokuapp.com/discover")
        else {
            print("invalid url")
            return
        }
        
        // make request
        URLSession.shared.dataTask(
            with: url
        ) { data, response, error in
            let locations = try! JSONDecoder().decode(
                [Location].self,
                from: data!
            )
            
            DispatchQueue.main.async {
                completion(locations)
            }
        }.resume()
    }
}
