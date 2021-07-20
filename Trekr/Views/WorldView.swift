//
//  WorldView.swift
//  Trekr
//
//  Created by Yazeed AlKhalaf on 20/07/2021.
//

import MapKit
import SwiftUI

struct WorldView: View {
    @EnvironmentObject var locationsLoader: LocationsLoader
    
    @State var region = MKCoordinateRegion(
        center: CLLocationCoordinate2D(
            latitude: 24.7068,
            longitude: 46.6697
        ),
        span: MKCoordinateSpan(
            latitudeDelta: 40,
            longitudeDelta: 40
        )
    )
    
    var body: some View {
        Map(
            coordinateRegion: $region,
            annotationItems: locationsLoader.places
        ) { location in
            MapAnnotation(
                coordinate: CLLocationCoordinate2D(
                    latitude: location.latitude,
                    longitude: location.longitude
                )
            ) {
                NavigationLink(
                    destination: DiscoverView(location: location)
                ) {
                    Image(location.country)
                        .resizable()
                        .cornerRadius(10)
                        .frame(width: 80, height: 40)
                        .shadow(radius: 3)
                }
            }
        }
        .navigationTitle("Locations")
    }
}

struct WorldView_Previews: PreviewProvider {
    static var previews: some View {
        WorldView()
    }
}
